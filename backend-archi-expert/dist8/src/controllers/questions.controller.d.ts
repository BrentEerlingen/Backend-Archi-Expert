/// <reference types="express" />
import { Request } from '@loopback/rest';
import { QuestionRepository } from '../repositories/question.repository';
import { archiexpert } from '../models/question.model';
export declare class QuestionsController {
    private req;
    private questionRepository;
    constructor(req: Request, questionRepository: QuestionRepository);
    questions(): Promise<archiexpert[]>;
}
