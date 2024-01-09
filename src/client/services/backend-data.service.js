import { callBackendApi} from "./backend-api.service";

const apiServerUrl = import.meta.env.VITE_APP_API_SERVER_URL;

export const getLandingPageData = async () => {
  const config = {
    url: `${apiServerUrl}/api/landingpage-data`,
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  };

  const { data, error } = await callBackendApi({ config });

  return {
    data: data || null,
    error,
  };
};

export const getDashboardData = async (accessToken) => {
  const config = {
    url: `${apiServerUrl}/api/dashboard-data`,
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  };

  const { data, error } = await callBackendApi({ config });

  return {
    data: data || null,
    error,
  };
};

