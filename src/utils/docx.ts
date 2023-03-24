// const docx = require('docx');
// const doc = new docx.Document();
//
// const paragraph = new docx.Paragraph("Це текст, який буде вставлений у документ");
// doc.addParagraph(paragraph);
//
// const table = new docx.Table({
//   rows: [
//     new docx.TableRow({
//       children: [
//         new docx.TableCell({ children: [new docx.Paragraph("1")] }),
//         new docx.TableCell({ children: [new docx.Paragraph("2")] }),
//         new docx.TableCell({ children: [new docx.Paragraph("3")] }),
//       ],
//     }),
//     new docx.TableRow({
//       children: [
//         new docx.TableCell({ children: [new docx.Paragraph("4")] }),
//         new docx.TableCell({ children: [new docx.Paragraph("5")] }),
//         new docx.TableCell({ children: [new docx.Paragraph("6")] }),
//       ],
//     }),
//   ],
// });
// doc.addTable(table);
//
// const exporter = new docx.LocalPacker(doc);
// exporter.pack('My Document');
