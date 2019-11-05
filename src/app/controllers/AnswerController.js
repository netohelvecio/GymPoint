import * as Yup from 'yup';

import HelpOrder from '../models/HelpOrder';

class AnswerController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const answers = await HelpOrder.findAll({
      where: { answer: null },
      limit: 10,
      offset: (page - 1) * 10,
      order: ['created_at'],
    });

    return res.json(answers);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      answer: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id } = req.params;
    const { answer } = req.body;

    const helpIsExist = await HelpOrder.findByPk(id);

    if (!helpIsExist) {
      return res.status(400).json({ error: 'Question does not exist' });
    }

    const help = await helpIsExist.update({
      answer,
      answer_at: new Date(),
    });

    return res.json(help);
  }
}

export default new AnswerController();
