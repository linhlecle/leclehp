export const fileDownloader = (filePath: string) => {
  const file_path = filePath;
  const aElement = document.createElement('a');
  aElement.href = file_path;
  aElement.download = file_path.substring(file_path.lastIndexOf('/') + 1);
  document.body.appendChild(aElement);
  aElement.click();
  document.body.removeChild(aElement);
};
