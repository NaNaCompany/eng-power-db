export const tool = {
  "id": "E026",
  "title": "전력 이득 dB 계산기",
  "inputs_text": "출력 전력 P_out [W], 입력 전력 P_in [W]",
  "formula": "G_P = 10 log₁₀(P_out / P_in)",
  "output_text": "전력 이득 G_P [dB]",
  "assumptions": "두 전력>0. 전압비의 20log 식과 혼용하지 않고 기준이 필요한 dBm과도 구분한다. 감쇠는 음수로 표시한다.",
  "purpose": "전력비 데시벨 계산 / 증폭기·링크 손실 검산",
  "sources": [
    {
      "label": "NIST · Guide to the SI, Chapter 8",
      "url": "https://www.nist.gov/pml/special-publication-811/nist-guide-si-chapter-8"
    }
  ],
  "slug": "eng-power-db",
  "category": "전기",
  "result_label": "전력 이득 G_P",
  "result_dimension": "decibel",
  "fields": [
    {
      "key": "pout",
      "label": "출력 전력 P_out",
      "dimension": "power",
      "example": 1,
      "constraint": "positive",
      "display_unit": "W",
      "display_value": "1"
    },
    {
      "key": "pin",
      "label": "입력 전력 P_in",
      "dimension": "power",
      "example": 100,
      "constraint": "positive",
      "display_unit": "W",
      "display_value": "100"
    }
  ],
  "site": "https://nanalab.kr/eng-power-db/",
  "repository": "https://github.com/NaNaCompany/eng-power-db",
  "condition": "",
  "output_unit": "db"
};
