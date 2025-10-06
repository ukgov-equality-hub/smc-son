
#################################################
# INPUTS FOR THIS SCRIPT - CHANGE THIS SECTION

input_folder = "input/SON25/"

input_file = "2025-01-01-ci3-full-dataset.csv"

output_folder_prefix = "../son/content"
domain = "drivers_of_social_mobility"
subdomain = "composite_indices"
indicator_name = "innovation_and_growth"
version = "2.0"

indicator_code = "CI3"


############
# IMPORTS

source("_shared.R")


###############
# THE SCRIPT

## Clear output folder
unlink(output_folder, recursive=TRUE)

input_file_path = paste0(input_folder, input_file)

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

csv_filename = generate_csv_file_name()
save_data_frame(data, csv_filename)


##########################################
# SECTION: By area

section_chart_type = "composite_index"
section_csv_name = "UK205regions"

data_for_section = get_data_for_chart_type(data, section_chart_type)

time_periods_desc_order = c("2018 to 2024", "2012 to 2017", "2006 to 2011", "2000 to 2005")

#################
# CHART FORMAT

for (time_period  in time_periods_desc_order) {
  
  data_for_section_filtered = data_frame__filter(
    data_frame = data_for_section,
    column_name = "primary_split_value",
    values = c(time_period)
  )
  
  snake_time_period = str_replace_all(time_period," ", "-")
  
  csv_filename = generate_csv_file_name(split = paste0(section_csv_name, "--", snake_time_period), format = "chart")
  save_data_frame(data_for_section_filtered, csv_filename)
  
}


#################
# TABLE FORMAT

data_for_section = data_for_section %>%
  mutate(value = as.character(value)) %>% 
  rename(
    c("Index of 'conditions of childhood' ('Z-scores')" = "value",
      "Group" = "secondary_split_value") ) %>%
  pivot_longer(cols = c("Index of 'conditions of childhood' ('Z-scores')", "Group"),
               names_to = "metric",
               values_to = "value")


pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "primary_split_value",
  pivot_columns_column_2_name = "metric",
  pivot_rows_column_name = "area_name",
  pivot_cells_column_name = "value",
  pivot_table_name = "Region",
  pivot_table_columns_order_values = time_periods_desc_order,
  pivot_table_columns_2_order_values = c("Index of 'conditions of childhood' ('Z-scores')", "Group")
) 

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)

