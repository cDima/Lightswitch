/****** Script for SelectTopNRows command from SSMS  ******/
SELECT REPLACE(REPLACE([State], CHAR(13), ''), CHAR(10), '')
  FROM [huedb].[dbo].[TrackedStates]
  order by [Created] desc