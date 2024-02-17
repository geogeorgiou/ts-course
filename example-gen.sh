#!/bin/bash

# Define the output folder name
output_folder="_examples"

# Function to copy package.json and tsconfig.json files
copy_files() {
    cp package.json "$1"
    cp tsconfig.json "$1"
}

# Remove output folder if it exists
if [ -d "$output_folder" ]; then
    rm -rf "$output_folder"
fi

# Create output folder
mkdir "$output_folder"

# Loop through unique name folders
for folder in src/*/; do
    # Get the folder name
    folder_name=$(basename "$folder")

    # Create corresponding folder in output
    mkdir -p "$output_folder/$folder_name"
    mkdir -p "$output_folder/$folder_name/src"

    echo "Copying $folder_name..."

    # Copy src directory contents
    cp -r "${folder}src/"* "$output_folder/$folder_name/src"

    # Copy package.json and tsconfig.json
    copy_files "$output_folder/$folder_name"
done

echo "Zipping..."

# Zip the output folder
zip -r _examples.zip "$output_folder"

echo "Done!"