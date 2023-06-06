
# Simulated data for Data Explorer tool event

library(dplyr)

setwd("C:/Users/rosa.alonso/Documents/SON23")

# Economic activity by ethnicity (IN31)

# 20 obs + CI - avg 86.14
rand_norms_IN31 <- rnorm(n = 20, mean = 86.14, sd = 1)
IN31_Value <- as.data.frame(rand_norms_IN31)
IN31_Value_CI <- IN31_Value %>% 
  rename(Value=1) %>% 
  mutate(LCI=Value-1, UCI=Value+1)

write.csv(IN31_Value_CI, "Data/Simulated data/2023-05-22 IN31_Value_CI.csv", row.names=FALSE)

# Absolute educational mobility by sex (MO31)

# 32 obs - avg 0.25
rand_norms_MO31 <- rnorm(n = 32, mean = 25.01, sd = 1)
MO31_Value <- as.data.frame(rand_norms_MO31)

write.csv(MO31_Value, "Data/Simulated data/2023-05-22 MO31_Value.csv", row.names=FALSE)


# Promising prospects (ITL2)

# 41 obs - 0.3284

rand_norms_CI1 <- rnorm(n = 32, mean = 0.3284, sd = 1)
CI1_Value <- as.data.frame(rand_norms_CI1)

write.csv(CI1_Value, "Data/Simulated data/2023-05-22 CI1_Value.csv", row.names=FALSE)


# Socail mobility by area (Manchester or Kent)

# 5 obs - avg Kent 0.3733, avg Manchester 0.4869

rand_norms_Kent <- rnorm(n = 5, mean = 0.3733, sd = 1)
Kent_Value <- as.data.frame(rand_norms_Kent)

write.csv(Kent_Value, "Data/Simulated data/2023-05-22 Kent_Value.csv", row.names=FALSE)

rand_norms_Man <- rnorm(n = 5, mean = 0.4869, sd = 1)
Man_Value <- as.data.frame(rand_norms_Man)

write.csv(Man_Value, "Data/Simulated data/2023-05-22 Man_Value.csv", row.names=FALSE)

