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
const repository_1 = require("@loopback/repository");
const context_1 = require("@loopback/context");
const models_1 = require("../models");
let QuestionRepository = class QuestionRepository extends repository_1.DefaultCrudRepository {
    constructor(db) {
        super(models_1.archiexpert, db);
        this.db = db;
    }
};
QuestionRepository = __decorate([
    __param(0, context_1.inject('datasources.archiexpert')),
    __metadata("design:paramtypes", [repository_1.juggler.DataSource])
], QuestionRepository);
exports.QuestionRepository = QuestionRepository;
//# sourceMappingURL=question.repository.js.map