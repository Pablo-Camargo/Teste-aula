import apiGrowDevers from '../services/apiGrowDevers';

class SessionController {
  async store(req, res) {
    try {
      const { username, password } = req.body;

      const { data } = await apiGrowDevers.post('/login', {
        username,
        password,
      });
      return res.json(data);
    } catch (error) {
      return res.status(error.status || 400).json(error);
    }
  }
}

export default new SessionController();
