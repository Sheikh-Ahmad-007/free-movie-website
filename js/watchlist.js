import { db, auth } from './firebase.js';
class Watchlist { constructor() { this.items = []; } }
export const WatchlistModule = new Watchlist();
