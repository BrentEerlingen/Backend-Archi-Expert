"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Uncomment these imports to begin using these cool features!
const rest_1 = require("@loopback/rest");
const rest_2 = require("@loopback/rest");
const context_1 = require("@loopback/context");
const question_repository_1 = require("../repositories/question.repository");
const repository_1 = require("@loopback/repository");
let QuestionsController = class QuestionsController {
    constructor(req, questionRepository) {
        this.req = req;
        this.questionRepository = questionRepository;
    }
    async questions() {
        return await this.questionRepository.find();
    }
};
__decorate([
    rest_2.get('/questions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], QuestionsController.prototype, "questions", null);
QuestionsController = __decorate([
    __param(0, context_1.inject(rest_1.RestBindings.Http.REQUEST)), __param(1, repository_1.repository('QuestionRepository')),
    __metadata("design:paramtypes", [Object, question_repository_1.QuestionRepository])
], QuestionsController);
exports.QuestionsController = QuestionsController;
//# sourceMappingURL=questions.controller.js.map