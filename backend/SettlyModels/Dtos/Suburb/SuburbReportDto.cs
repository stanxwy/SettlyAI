namespace SettlyModels.Dtos;

public class SuburbReportDto
{
    public string Id { get; set; } = string.Empty;
    public int SuburbId { get; set; }

    public IncomeEmploymentDto? IncomeEmployment { get; set; }
    public HousingMarketDto? HousingMarket { get; set; }
    public PopulationSupplyDto? PopulationSupply { get; set; }
    public RiskDevelopmentDto? RiskDevelopment { get; set; }
    public LivabilityDto? Livability { get; set; }
    public SettlyAIScoreDto? SettlyAIScore { get; set; }

    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }

}