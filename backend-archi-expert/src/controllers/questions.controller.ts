// Uncomment these imports to begin using these cool features!
import { Request, RestBindings } from '@loopback/rest';
import { get } from '@loopback/rest';
import { inject } from '@loopback/context';
import { QuestionRepository } from '../repositories/question.repository';
import { repository } from '@loopback/repository';
import { archiexpert } from '../models/question.model';


export class QuestionsController {
  constructor(@inject(RestBindings.Http.REQUEST) private req: Request, @repository('QuestionRepository') private questionRepository: QuestionRepository) { }

  @get('/questions')
  async questions(): Promise<archiexpert[]> {
    return await this.questionRepository.find();
  }
}
