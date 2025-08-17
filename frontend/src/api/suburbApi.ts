import type { ILivability, ISuburbReport } from '@/interfaces/suburbReport';
import httpClient from './httpClient';

// Get suburb report by suburb ID
export const getSuburbReport = async (
  suburbId: string
): Promise<ISuburbReport> => {
  const response = await httpClient.get<ISuburbReport>(`/suburb/${suburbId}`);
  return response.data;
};

export const getSuburbLivability = async (suburbId: string) => {
  const response = await httpClient.get<ILivability>(
    `/suburb/${suburbId}/livability`
  );
  return response.data;
};
