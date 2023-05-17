import "./styles.css";

export function absentNumber(array) {
  let missingNumber = array.length + 1;
  for (let i = 0; i < array.length; i++) {
    missingNumber ^= array[i] ^ (i + 1);
  }
  return missingNumber;
}
