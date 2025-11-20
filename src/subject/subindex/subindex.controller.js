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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectController = void 0;
const common_1 = require("@nestjs/common");
const subindex_service_1 = require("./subindex.service");
let SubjectController = class SubjectController {
    constructor(indexService) {
        this.indexService = indexService;
    }
    applications() {
        return this.indexService.applications();
    }
    chess() {
        return this.indexService.chess();
    }
    calculator() {
        return this.indexService.calculator();
    }
    maze() {
        return this.indexService.maze();
    }
    sass_() {
        return this.indexService.sass_();
    }
    codepen() {
        return this.indexService.codepen();
    }
    tilt_maze() {
        return this.indexService.tilt_maze();
    }
    dino() {
        return this.indexService.dino();
    }
    solitaire() {
        return this.indexService.solitaire();
    }
    sudoku() {
        return this.indexService.sudoku();
    }
    puzzles() {
        return this.indexService.puzzles();
    }
    tic_tac_toe() {
        return this.indexService.tic_tac_toe();
    }
    clock() {
        return this.indexService.clock();
    }
    hangman() {
        return this.indexService.hangman();
    }
    virtual_keyboard() {
        return this.indexService.virtual_keyboard();
    }
};
__decorate([
    (0, common_1.Get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SubjectController.prototype, "applications", null);
__decorate([
    (0, common_1.Get)("/chess"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SubjectController.prototype, "chess", null);
__decorate([
    (0, common_1.Get)("/calculator"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SubjectController.prototype, "calculator", null);
__decorate([
    (0, common_1.Get)("/maze"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SubjectController.prototype, "maze", null);
__decorate([
    (0, common_1.Get)("/sass_"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SubjectController.prototype, "sass_", null);
__decorate([
    (0, common_1.Get)("/codepen"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SubjectController.prototype, "codepen", null);
__decorate([
    (0, common_1.Get)("/tilt_maze"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SubjectController.prototype, "tilt_maze", null);
__decorate([
    (0, common_1.Get)("/dino"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SubjectController.prototype, "dino", null);
__decorate([
    (0, common_1.Get)("/solitaire"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SubjectController.prototype, "solitaire", null);
__decorate([
    (0, common_1.Get)("/sudoku"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SubjectController.prototype, "sudoku", null);
__decorate([
    (0, common_1.Get)("/puzzles"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SubjectController.prototype, "puzzles", null);
__decorate([
    (0, common_1.Get)("/tic_tac_toe"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SubjectController.prototype, "tic_tac_toe", null);
__decorate([
    (0, common_1.Get)("/clock"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SubjectController.prototype, "clock", null);
__decorate([
    (0, common_1.Get)("/hangman"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SubjectController.prototype, "hangman", null);
__decorate([
    (0, common_1.Get)("/virtual_keyboard"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], SubjectController.prototype, "virtual_keyboard", null);
SubjectController = __decorate([
    (0, common_1.Controller)("/subject"),
    __metadata("design:paramtypes", [subindex_service_1.SubjectService])
], SubjectController);
exports.SubjectController = SubjectController;
//# sourceMappingURL=subindex.controller.js.map