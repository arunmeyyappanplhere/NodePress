export const addNewBlog = async (req, res) => {
  const { ImageBase64, Title, Category, Desc, Content } = req.body;
  
  res.send({ ImageBase64, Title, Category, Desc, Content });
};
