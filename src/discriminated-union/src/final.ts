//Solution Exercise 1

type CheckboxProps = {
  type: 'checkbox';
  checked: boolean;
};

type TextProps = {
  type: 'text';
  value: string;
};

type RadioProps = {
  type: 'radio';
  selected: boolean;
};

type InputProps = CheckboxProps | TextProps | RadioProps;

//Solution Exercise 2

function isCheckbox(input: InputProps): input is CheckboxProps {
  return input.type === 'checkbox';
}

function isText(input: InputProps): input is TextProps {
  return input.type === 'text';
}

function isRadio(input: InputProps): input is RadioProps {
  return input.type === 'radio';
}

//Solution Exercise 3

function printValue(input: InputProps) {
  if (isCheckbox(input)) {
    console.log(input.checked);
  } else if (isText(input)) {
    console.log(input.value);
  } else if (isRadio(input)) {
    console.log(input.selected);
  }
}
