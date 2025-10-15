
############
# IMPORTS

output_folder_prefix = NULL
domain = NULL
subdomain = NULL
indicator_name = NULL
source("_shared.R")

###############
# THE SCRIPT


input_folder = "input/SON25/"

output_folder = "../son/content/social_mobility_by_area/3.0/"



## Clear output folder
unlink(output_folder, recursive=TRUE)


####


read_process_ci_input_file = function(input_file_path) {
  # Open the input file
  data = read.csv(input_file_path)
  
  # Remove some columns
  data = data_frame__remove_columns(
    data,
    "variable_used",
    "age_used",
    "weight_used",
    "year_used",
    "label"
  )
  
  data$group_number = composite_index_categories_rename$group_number[match(data$secondary_split_value, composite_index_categories_rename$old_name)]
  data$secondary_split_value = composite_index_categories_rename$new_name[match(data$secondary_split_value, composite_index_categories_rename$old_name)]
  
  return(data)
}


##### CI1

input_file = "2025-01-01-ci1-full-dataset.csv"
indicator_code = "CI1"
input_file_path = paste0(input_folder, input_file)

data_ci1 <- read_process_ci_input_file(input_file_path)

data_ci1 = data_ci1 %>%
  mutate(
    group_number = as.character(group_number),
    primary_split_value = str_replace_all(primary_split_value," ", "_")) %>% 
  rename(
    c("childhood_conditions_group_id" = "group_number",
      "childhood_conditions_group_name" = "secondary_split_value")) %>% 
  pivot_longer(cols = c("childhood_conditions_group_id", "childhood_conditions_group_name"),
               names_to = "metric",
               values_to = "metric_value")

data_ci1 = dcast(data_ci1, area_name ~ metric + primary_split_value , value.var = "metric_value")


##### CI2

input_file = "2025-01-01-ci2-full-dataset.csv"
indicator_code = "CI2"
input_file_path = paste0(input_folder, input_file)

data_ci2 <- read_process_ci_input_file(input_file_path)

data_ci2 = data_ci2 %>%
  mutate(
    group_number = as.character(group_number),
    primary_split_value = str_replace_all(primary_split_value," ", "_")) %>% 
  rename(
    c("labour_market_opportunities_group_id" = "group_number",
      "labour_market_opportunities_group_name" = "secondary_split_value")) %>% 
  pivot_longer(cols = c("labour_market_opportunities_group_id", "labour_market_opportunities_group_name"),
               names_to = "metric",
               values_to = "metric_value")

data_ci2 = dcast(data_ci2, area_name ~ metric + primary_split_value , value.var = "metric_value")

data_ci1_ci2 = inner_join(data_ci1, data_ci2, by = "area_name", unmatched="error", relationship = "one-to-one")


##### CI3

input_file = "2025-01-01-ci3-full-dataset.csv"
indicator_code = "CI3"
input_file_path = paste0(input_folder, input_file)

data_ci3 <- read_process_ci_input_file(input_file_path)

data_ci3 = data_ci3 %>%
  mutate(
    group_number = as.character(group_number),
    primary_split_value = str_replace_all(primary_split_value," ", "_")) %>% 
  rename(
    c("innovation_and_growth_group_id" = "group_number",
      "innovation_and_growth_group_name" = "secondary_split_value")) %>% 
  pivot_longer(cols = c("innovation_and_growth_group_id", "innovation_and_growth_group_name"),
               names_to = "metric",
               values_to = "metric_value")

data_ci3 = dcast(data_ci3, area_name ~ metric + primary_split_value , value.var = "metric_value")

data_ci1_ci2_ci3 = inner_join(data_ci1_ci2, data_ci3, by = "area_name", unmatched="error", relationship = "one-to-one")


##### CI4

input_file = "2025-01-01-ci4-full-dataset.csv"
indicator_code = "CI4"
input_file_path = paste0(input_folder, input_file)

data_ci4 <- read_process_ci_input_file(input_file_path)

data_ci4 = data_ci4 %>%
  mutate(
    group_number = as.character(group_number),
    primary_split_value = str_replace_all(primary_split_value," ", "_")) %>% 
  rename(
    c("promising_prospects_group_id" = "group_number",
      "promising_prospects_group_name" = "secondary_split_value")) %>% 
  pivot_longer(cols = c("promising_prospects_group_id", "promising_prospects_group_name"),
               names_to = "metric",
               values_to = "metric_value")

data_ci4 = dcast(data_ci4, area_name ~ metric + primary_split_value , value.var = "metric_value")

data_ci1_ci2_ci3_ci4 = inner_join(data_ci1_ci2_ci3, data_ci4, by = "area_name", unmatched="error", relationship = "one-to-one")



data_ci1_ci2_ci3_ci4 = data_ci1_ci2_ci3_ci4 %>% 
  mutate(
    region_url = str_replace_all(tolower(area_name)," ", "_")) %>% 
  rename("region_fullname" = "area_name")

csv_filename = "composite-indices-3.0--all.csv"
save_data_frame(data_ci1_ci2_ci3_ci4, csv_filename)

