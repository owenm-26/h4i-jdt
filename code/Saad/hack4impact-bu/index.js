#!/usr/bin/env node
'use strict'

import chalk from 'chalk'
import boxen from 'boxen'
import clear from 'clear'
import inquirer from 'inquirer'
import Enquirer from 'enquirer'
import open from 'open' 
import terminalImage from 'terminal-image';

const data = {
    name: chalk.bold.blue('Hack4impact') + chalk.red(' Boston University'),
    instagram: chalk.white('https://www.instagram.com/hack4impactbu/'),
    website : chalk.white('https://hack4impact.org/'),

    instagramLabel: chalk.white('Instagram:'),
    githubLabel: chalk.white('GitHub:'),
    websiteLabel: chalk.white('Website:'),
}

const card = boxen(
    [
        `${data.name}`,
        ``,
        `${data.instagramLabel} ${data.instagram}`,
        `${data.githubLabel} ${data.instagram}`,
        `${data.websiteLabel} ${data.website}`,
    ].join("\n"),
    {
        margin: 0,
        padding: 1,
        borderStyle: 'double',
        borderColor: 'white',
    }
)

console.log(card)