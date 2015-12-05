describe("Hue API", function() {

  it("schedules timing", function() {
    
    var timeValue = "2014-09-20T19:35:26";
    var t1 = Date.parse(timeValue);
    // DateTime(2014, 9, 20, 19, 35, 26), schedule.LocalTime.DateTime.Value
    expect(t1).toBe(timeValue); 
  }); 

  //string timeValue = "\"2014-09-20T19:35:26A00:30:00\"";
  //Assert.AreEqual(new DateTime(2014, 9, 20, 19, 35, 26), schedule.LocalTime.DateTime.Value);
  //Assert.AreEqual(new TimeSpan(0, 30, 0), schedule.LocalTime.RandomizedTime);


  //string timeValue = "\"W32/T19:45:00\""; 
  //Assert.AreEqual(new TimeSpan(19, 45, 00), schedule.LocalTime.TimerTime.Value);
  //Assert.AreEqual(RecurringDay.RecurringTuesday, schedule.LocalTime.RecurringDay); //W32


  /*
  string timeValue = "\"W127/T19:45:00A00:30:00\"";

  Assert.IsNotNull(schedule);
  Assert.IsNotNull(schedule.LocalTime);
  Assert.IsTrue(schedule.LocalTime.TimerTime.HasValue);
  Assert.AreEqual(new TimeSpan(19, 45, 00), schedule.LocalTime.TimerTime.Value);
  Assert.AreEqual(new TimeSpan(0, 30, 0), schedule.LocalTime.RandomizedTime);
  Assert.AreEqual(RecurringDay.RecurringAlldays, schedule.LocalTime.RecurringDay); //W127
  





  string timeValue = "\"PT19:45:00\"";
  string jsonString = "{ \"name\": \"some name\",\"description\": \"\",\"time\": " + timeValue + "}";

  Schedule schedule = JsonConvert.DeserializeObject<Schedule>(jsonString);

  Assert.IsNotNull(schedule);
  Assert.IsNotNull(schedule.LocalTime);
  Assert.IsNull(schedule.LocalTime.RandomizedTime);
  Assert.IsTrue(schedule.LocalTime.TimerTime.HasValue);
  Assert.AreEqual(new TimeSpan(19, 45, 00), schedule.LocalTime.TimerTime.Value);

  string result = JsonConvert.SerializeObject(schedule.LocalTime, new JsonConverter[] { new HueDateTimeConverter() });
  Assert.IsNotNull(result);
  Assert.AreEqual(timeValue, result);
  






  string timeValue = "\"PT19:45:00A00:30:00\"";
  string jsonString = "{ \"name\": \"some name\",\"description\": \"\",\"time\": " + timeValue + "}";

  Schedule schedule = JsonConvert.DeserializeObject<Schedule>(jsonString);

  Assert.IsNotNull(schedule);
  Assert.IsNotNull(schedule.LocalTime);
  Assert.IsTrue(schedule.LocalTime.TimerTime.HasValue);
  Assert.AreEqual(new TimeSpan(19, 45, 00), schedule.LocalTime.TimerTime.Value);
  Assert.AreEqual(new TimeSpan(0, 30, 0), schedule.LocalTime.RandomizedTime);

  string result = JsonConvert.SerializeObject(schedule.LocalTime, new JsonConverter[] { new HueDateTimeConverter() });
  Assert.IsNotNull(result);
  Assert.AreEqual(timeValue, result);
  







  string timeValue = "\"R65/PT19:45:00\"";
  string jsonString = "{ \"name\": \"some name\",\"description\": \"\",\"time\": " + timeValue + "}";

  Schedule schedule = JsonConvert.DeserializeObject<Schedule>(jsonString);

  Assert.IsNotNull(schedule);
  Assert.IsNotNull(schedule.LocalTime);
  Assert.IsNull(schedule.LocalTime.RandomizedTime);
  Assert.IsTrue(schedule.LocalTime.TimerTime.HasValue);
  Assert.IsTrue(schedule.LocalTime.NumberOfRecurrences.HasValue);
  Assert.AreEqual(new TimeSpan(19, 45, 00), schedule.LocalTime.TimerTime.Value);
  Assert.AreEqual<int?>(65, schedule.LocalTime.NumberOfRecurrences.Value);

  string result = JsonConvert.SerializeObject(schedule.LocalTime, new JsonConverter[] { new HueDateTimeConverter() });
  Assert.IsNotNull(result);
  Assert.AreEqual(timeValue, result);





  string timeValue = "\"R65/PT19:45:00A00:30:00\"";
  string jsonString = "{ \"name\": \"some name\",\"description\": \"\",\"time\": " + timeValue + "}";     

  Schedule schedule = JsonConvert.DeserializeObject<Schedule>(jsonString);

  Assert.IsNotNull(schedule);
  Assert.IsNotNull(schedule.LocalTime);
  Assert.IsTrue(schedule.LocalTime.TimerTime.HasValue);
  Assert.IsTrue(schedule.LocalTime.NumberOfRecurrences.HasValue);
  Assert.AreEqual(new TimeSpan(19, 45, 00), schedule.LocalTime.TimerTime.Value);
  Assert.AreEqual<int?>(65, schedule.LocalTime.NumberOfRecurrences.Value);
  Assert.AreEqual(new TimeSpan(0, 30, 0), schedule.LocalTime.RandomizedTime);

  string result = JsonConvert.SerializeObject(schedule.LocalTime, new JsonConverter[] { new HueDateTimeConverter() });
  Assert.IsNotNull(result);
  Assert.AreEqual(timeValue, result);



  */
});
