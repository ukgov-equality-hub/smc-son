
#################################################
# INPUTS FOR THIS SCRIPT - CHANGE THIS SECTION

input_folder = "input/SON25/"

input_file = "2025-01-01-in41-full-dataset.csv"

output_folder_prefix = "../son/content"
domain = "intermediate_outcomes"
subdomain = "/career_progression_(35_to_44_years)"
indicator_name = "further_training_and_qualifications"
version = "3.0"

indicator_code = "IN41"


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

csv_filename = generate_csv_file_name()
save_data_frame(data, csv_filename)

age_order = c(25, 32)
three_sebs_order = c("Working", "Intermediate", "Professional")
two_sebs_order = c("Working", "Professional")
two_sebs_order_w_percentages = c("Working (%)", "Professional (%)")


##########################################
# SECTION: By socio-economic background

section_chart_type = "seb"
section_csv_name = "age-and-SEB"


data_for_section = get_data_for_chart_type(data, section_chart_type)


#################
# CHART FORMAT

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "primary_split_value",
  values_1 = three_sebs_order,
  column_2 = "secondary_split_value",
  values_2 = age_order
)  %>% mutate(age_with_text = paste0("Age ", secondary_split_value))

csv_filename = generate_csv_file_name(split = section_csv_name, format = "chart")
save_data_frame(data_for_section, csv_filename)

#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_rows_column_name = "secondary_split_value",
  pivot_columns_column_name = "primary_split_value",
  pivot_cells_column_name = "value",
  pivot_table_name = "Age",
  pivot_table_columns_order_values = three_sebs_order,
  pivot_table_rows_order_values = age_order,
  pivot_table_column_names_suffix = " (%)"
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)



##########################################
# SECTION: By socio-economic background

section_chart_type = "trend"
section_csv_name = "year-of-birth-and-SEB"


data_for_section = get_data_for_chart_type(data, section_chart_type)


#################
# CHART FORMAT

for (seb  in two_sebs_order) {
  
  data_for_section_filtered = data_frame__filter(
    data_frame = data_for_section,
    column_name = "primary_split_value",
    values = c(seb)
  )
  
  data_for_section_filtered = data_frame__sort_rows_with_specific_values(
    data_frame = data_for_section_filtered,
    column_1 = "secondary_split_value",
    values_1 = unique(data_for_section$secondary_split_value, decreasing=FALSE),
    column_2 = "tertiary_split_value",
    values_2 = age_order
  ) %>% mutate(age_with_text = paste0("Age ", tertiary_split_value))
  
  snake_seb = str_replace_all(seb," ", "-")
  
  csv_filename = generate_csv_file_name(split = paste0(section_csv_name, "--", snake_seb), format = "chart")
  save_data_frame(data_for_section_filtered, csv_filename)
  
}

#################
# TABLE FORMAT

data_for_section <- data_for_section %>% 
  mutate(primary_split_value = paste0(primary_split_value, " (%)"))

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_rows_column_name = "secondary_split_value",
  pivot_columns_column_name = "primary_split_value",
  pivot_columns_column_2_name = "tertiary_split_value",
  pivot_cells_column_name = "value",
  pivot_table_name = "Year of birth",
  pivot_table_columns_order_values = two_sebs_order_w_percentages,
  pivot_table_columns_2_order_values = age_order,
  pivot_table_rows_order_values = unique(data_for_section$secondary_split_value, decreasing=FALSE),
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)
