import { LatestResultInterface } from '../../../interfaces';
export interface PostResultInterface {
  DrawResults: LatestResultInterface[];
  ErrorInfo?: string;
  Success?: boolean;
}
