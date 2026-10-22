import { separateLabels } from '../math/chart';
export interface ChartLabel {text:string;x:number;y:number;w:number;h:number;color:string}
export function labelEngine(labels:ChartLabel[],height:number){return separateLabels(labels,height);}
export type LabelCanvas=HTMLCanvasElement & {__labels?:ChartLabel[]};
