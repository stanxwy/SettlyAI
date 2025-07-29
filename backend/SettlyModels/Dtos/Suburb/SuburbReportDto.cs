namespace SettlyModels.Dtos
{
    public class SuburbReportDto
    {
        public int Id { get; set; }
        public int SuburbId { get; set; }

        #region IncomeAndEmployment
        public int MedianIncome { get; set; }
        public decimal EmploymentRate { get; set; }
        public decimal WhiteCollarRatio { get; set; }
        public decimal JobGrowth { get; set; }
        #endregion

        #region PropertyMarketInsights
        public int MedianPrice { get; set; }
        public decimal PriceGrowthThreeYear { get; set; }
        public int StockOnMarket { get; set; }
        public decimal ClearanceRate { get; set; }

        public decimal RentalMarketWeeklyRent { get; set; }
        public decimal RentGrowthTwelveMonth { get; set; }
        public decimal VacancyRate { get; set; }
        public int SalesDaysOnMarket { get; set; }



        public int Population { get; set; }
        public decimal PopulationGrowthRate { get; set; }
        public decimal RentalYield { get; set; }

        #endregion

        #region DemandAndDevelopment
        public decimal RentersRatio { get; set; }
        public string LandSupply { get; set; } = string.Empty;
        public int BuildingApprovals { get; set; }
        public int DevelopmentProjects { get; set; }
        #endregion

        #region LifestyleAndAccessibility
        public decimal SupermarketDistance { get; set; }
        public decimal HospitalDistance { get; set; }
        public decimal TransportScore { get; set; }
        public decimal PrimarySchoolScore { get; set; }
        public decimal SecondarySchoolScore { get; set; }
        public decimal HospitalDensity { get; set; }
        #endregion

        #region SafetyAndScores
        public decimal CrimeRate { get; set; }
        public decimal AffordabilityScore { get; set; }
        public decimal GrowthPotential { get; set; }
        #endregion

        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        // Optional: Include SuburbName if needed in UI display
        // public string? SuburbName { get; set; }
    }
}
