import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const selectedDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
)