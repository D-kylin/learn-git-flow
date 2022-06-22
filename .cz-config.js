'use strict';

module.exports = {
  types: [
    {value: 'feat',     name: 'feat:     A new feature'},
    {value: 'ui',       name: 'ui:       Changes to Cascading Style Sheets'},
    {value: 'fix',      name: 'fix:      A bug fix'},
    {value: 'chore',    name: 'chore:    Changes to the build process or auxiliary tools'},
    {value: 'docs',     name: 'docs:     Documentation only changes'},
  ],
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // limit subject length
  subjectLimit: 100
};