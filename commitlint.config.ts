import type { UserConfig } from "@commitlint/types";
import { RuleConfigSeverity } from "@commitlint/types";

const Configuration: UserConfig = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: "conventional-changelog-conventionalcommits",
  formatter: "@commitlint/format",
  rules: {
    "header-max-length": [RuleConfigSeverity.Error, "always", 50],
    "body-max-line-length": [RuleConfigSeverity.Error, "always", 72],
    "footer-max-line-length": [RuleConfigSeverity.Error, "always", 72],
  },
};

module.exports = Configuration;
