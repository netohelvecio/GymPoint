import Bee from 'bee-queue';

import MatriculationMail from '../app/jobs/MatriculationMail';

import redisConfig from '../config/redis';

const jobs = [MatriculationMail];

class Queue {
  constructor() {
    this.queues = {};

    this.init();
  }

  // armezena job e faz conexao com o banco
  init() {
    jobs.forEach(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: redisConfig,
        }),
        handle,
      };
    });
  }

  // adiciona job a fila
  add(queue, job) {
    return this.queues[queue].bee.createJob(job).save();
  }

  // faz o processo da fila
  processQueue() {
    jobs.forEach(job => {
      const { bee, handle } = this.queues[job.key];

      bee.process(handle);
    });
  }
}

export default new Queue();
