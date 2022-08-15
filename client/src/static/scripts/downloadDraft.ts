export const downloadDraft = (content: string, fileName: string) => {
  const download = document.createElement('a');
  const file = new Blob([content], {
    type: 'data:text/plain;charset=utf-8,',
  });
  download.href = URL.createObjectURL(file);
  download.download = fileName;
  document.body.appendChild(download);
  download.click();
};
