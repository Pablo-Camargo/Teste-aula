import apiGrowDevers from '../services/apiGrowDevers';

class UserController {
  async index(req, res) {
    try {
      const authHeader = req.headers.authorization;

      const options = {
        headers: {
          Authorization: authHeader,
        },
      };

      const { data } = await apiGrowDevers.get('/users', options);

      return res.json(data);
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ erro_message: error.response.data.message });
    }
  }

  async store(req, res) {
    try {
      const user = req.body;

      const { data } = await apiGrowDevers.post('/users', user);

      return res.json(data.user);
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ erro_message: error.response.data.message });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;
      const authHeader = req.headers.authorization;

      const options = {
        headers: {
          Authorization: authHeader,
        },
      };

      const { data } = await apiGrowDevers.get(`/users/${uid}`, options);
      return res.json(data.user);
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ erro_message: error.response.data.message });
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;
      const authHeader = req.headers.authorization;
      const { name, password, type, username } = req.body;

      const growdever = {
        name,
        password,
        type,
        username,
      };

      const options = {
        headers: {
          Authorization: authHeader,
        },
      };
      const { data } = await apiGrowDevers.put(
        `/users/${uid}`,
        growdever,
        options
      );
      return res.json(data);
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ erro_message: error.response.data.message });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;
      const authHeader = req.headers.authorization;

      const options = {
        headers: {
          Authorization: authHeader,
        },
      };

      const { data } = await apiGrowDevers.delete(`/users/${uid}`, options);
      return res.json(data);
    } catch (error) {
      return res
        .status(error.status || 400)
        .json({ erro_message: error.response.data.message });
    }
  }
}
export default new UserController();
