namespace SettlyModels.Entities;

public class Suburb
{
   
    public int Id { get; set; }
    public string Name { get; set; } = null;
    public string State { get; set; }
    public string PostCode { get; set; }
    public string Population { get; set; }
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    
    // 一对多关系：一个 Suburb 有很多 Report
    public ICollection<SuburbReport> Reports { get; set; } = new List<SuburbReport>();
}