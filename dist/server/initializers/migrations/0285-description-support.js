"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
function up(utils) {
    return __awaiter(this, void 0, void 0, function* () {
        {
            const data = {
                type: Sequelize.STRING(1000),
                allowNull: true,
                defaultValue: null
            };
            yield utils.queryInterface.changeColumn('video', 'support', data);
        }
        {
            const data = {
                type: Sequelize.STRING(1000),
                allowNull: true,
                defaultValue: null
            };
            yield utils.queryInterface.changeColumn('videoChannel', 'support', data);
        }
        {
            const data = {
                type: Sequelize.STRING(1000),
                allowNull: true,
                defaultValue: null
            };
            yield utils.queryInterface.changeColumn('videoChannel', 'description', data);
        }
        {
            const data = {
                type: Sequelize.STRING(1000),
                allowNull: true,
                defaultValue: null
            };
            yield utils.queryInterface.changeColumn('account', 'description', data);
        }
    });
}
exports.up = up;
function down(options) {
    throw new Error('Not implemented.');
}
exports.down = down;
//# sourceMappingURL=0285-description-support.js.map