export default {
    actionHandlers: {
        SET_DEF: ({ action, state, updateProperties }) => {
            action.stopPropagation();

            const { payload: loadedDef } = action;
            const { def } = state.properties;

            if (def) {
                return;
            }

            updateProperties({
                def: loadedDef,
            });
        },
    }
}