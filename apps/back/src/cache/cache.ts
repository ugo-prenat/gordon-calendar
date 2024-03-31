import NodeCache from 'node-cache';
import { CACHE_TTL } from '../constants';

export default new NodeCache({ stdTTL: CACHE_TTL });
