export const authUser = async (req, res) => {
  const { username } = req.body;
  return res.json({ username: username, secret: "sha256" });
}