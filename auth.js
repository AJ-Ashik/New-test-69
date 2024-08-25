export default function handler(req, res) {
  const auth = req.headers.authorization;

  if (!auth) {
    res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
    return res.status(401).send('Authentication required.');
  }

  const credentials = Buffer.from(auth.split(' ')[1], 'base64').toString().split(':');
  const [username, password] = credentials;

  const validUsername = 'admin';  // Replace with your desired username
  const validPassword = 'admin';  // Replace with your desired password

  if (username === validUsername && password === validPassword) {
    return res.status(200).send('Authentication successful.');
  }

  res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
  return res.status(401).send('Invalid credentials.');
}
