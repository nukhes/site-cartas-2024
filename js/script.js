import * as io from './card_io.js';
import * as path from './random_path.js';

// this functions literally start everything
io.refreshCards();

// here is the magic, this function will generate a route based on the rules (../schema.bmp), the player input is merely a placebo hahaahaha
path.randomPath();
