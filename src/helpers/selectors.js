import { createSelectorCreator, defaultMemoize } from 'reselect';
import Immutable from 'immutable';

export const convertToJS = data => Immutable.isImmutable(data) ? data.toJS() : data;

export const createImmutableSelector = createSelectorCreator(defaultMemoize, Immutable.is);
