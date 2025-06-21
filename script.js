const byteSize = (str) => {
  // write your code here
	const blob = new Blob([str]);
      return blob.size;
}
 function calculateByteSize() {
      const input = document.getElementById("inputString").value;
      const size = byteSize(input);
      document.getElementById("result").textContent = `Byte Size: ${size} bytes`;
    }

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
