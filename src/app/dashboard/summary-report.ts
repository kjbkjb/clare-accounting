export class SummaryReport {
  store_id: number;
  organization_id: number;
  report_date: string;
  funds_in: string;
  funds_out: string;
  settlement_total: string;
  credit_card_in: string;
  credit_card_out: string;
  ach_in: string;
  ach_out: string;
  payment_online_count: number;
  payment_online_total: string;
  payment_offline_count: number;
  payment_offline_total: string;
  refund_online_count: number;
  refund_online_total: string;
  refund_offline_count: number;
  refund_offline_total: string;
  sale_count: number;
  sale_total: string;
  sale_average: string;
  fees_net: string;
  fees_organization_net: string;
  fees_passthrough_net: string;
}
