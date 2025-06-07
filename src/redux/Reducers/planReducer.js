export const getAllPlansReducer = (state, payload) => {
  return {
    ...state,
    getAllPlansData: payload && payload.data && payload.data,
    getAllPlansMsg: payload && payload.message && payload.message,
    getAllPlansLoading: payload && payload.loading && payload.loading,
  };
};

export const getTenantPlanReducer = (state, payload) => {
  return {
    ...state,
    getTenantPlanData: payload && payload.data && payload.data,
    getTenantPlanMsg: payload && payload.message && payload.message,
    getTenantPlanLoading: payload && payload.loading && payload.loading,
  };
};

export const assignPlanToTenantReducer = (state, payload) => {
  return {
    ...state,
    assignPlanToTenantData: payload && payload.data && payload.data,
    assignPlanToTenantMsg: payload && payload.message && payload.message,
    assignPlanToTenantLoading: payload && payload.loading && payload.loading,
  };
};

export const getTenantModulesReducer = (state, payload) => {
  return {
    ...state,
    getTenantModulesData: payload && payload.data && payload.data,
    getTenantModulesMsg: payload && payload.message && payload.message,
    getTenantModulesLoading: payload && payload.loading && payload.loading,
  };
};