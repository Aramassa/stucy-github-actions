"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sample = void 0;
const github = __importStar(require("@actions/github"));
const core = __importStar(require("@actions/core"));
const yaml_1 = __importDefault(require("yaml"));
const fs_1 = __importDefault(require("fs"));
class Sample {
    constructor(token, owner, repo) {
        this.token = token;
        this.owner = owner;
        this.repo = repo;
    }
    getIssue(issueNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const octokit = github.getOctokit(this.token);
            const { data: issue } = yield octokit.rest.issues.get({
                owner: this.owner || 'Aramassa',
                repo: this.repo || 'study-github-actions',
                issue_number: Number(issueNumber)
            });
            return issue.body || '';
        });
    }
    createFile(issueNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = yield this.getIssue(issueNumber);
            const matched = body.match(/```(.*?)```/ms);
            if (matched) {
                const prog = matched[1]
                    .replace(/\r\n?/g, '\n')
                    .replace(/^\n+/, '')
                    .replace(/\n+$/, '');
                const yaml = yaml_1.default.parse(fs_1.default.readFileSync('./tpl/1.yml', 'utf8'));
                yaml.spec.workflowSpec.templates[0].container.command = prog;
                // console.log(YAML.stringify(yaml));
                fs_1.default.writeFileSync('./tpl/1_2.yml', yaml_1.default.stringify(yaml));
            }
            else {
                core.setFailed(`処理内容の記載がありません`);
                // TODO エラー終了させる
            }
        });
    }
}
exports.Sample = Sample;
