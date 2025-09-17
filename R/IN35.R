
#################################################
# INPUTS FOR THIS SCRIPT - CHANGE THIS SECTION

input_folder = "input/SON25/"

input_file = "2025-01-01-in35-full-dataset.csv"

output_folder_prefix = "../son/content"
domain = "intermediate_outcomes"
subdomain = "work_in_early_adulthood_(25_to_29_years)"
indicator_name = "income_returns_to_education"
version = "3.0"

indicator_code = "IN35"


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

##########################################
# SECTION: By education level

section_chart_type = "edu_percentage"
section_csv_name = "qualification"


data_for_section = get_data_for_chart_type(data, section_chart_type)

#################
# CHART FORMAT

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "primary_split_value",
  values_1 = rev(highest_qualification_order)
) 

csv_filename = generate_csv_file_name(split = section_csv_name, format = "chart")
save_data_frame(data_for_section, csv_filename)

#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_rows_column_name = "primary_split_value",
  pivot_columns_column_name = "unit",
  pivot_cells_column_name = "value",
  pivot_table_name = "Highest qualification",
  pivot_table_rows_order_values = rev(highest_qualification_order)
) %>% rename("Percentage difference relative to lower level (%)" = "Percentage")

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)


##########################################
# SECTION: Moving average

section_chart_type = "trend"
section_csv_name = "moving-average"


data_for_section = get_data_for_chart_type(data, section_chart_type) %>% 
  filter(secondary_split_value != "Total")

#################
# CHART FORMAT

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "secondary_split_value",
  values_1 = rev(highest_qualification_order),
  column_2 = "time_period",
  values_2 = sort(
    unique(data_for_section$time_period))
) 

csv_filename = generate_csv_file_name(split = section_csv_name, format = "chart")
save_data_frame(data_for_section, csv_filename)

#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "secondary_split_value",
  pivot_rows_column_name = "time_period",
  pivot_cells_column_name = "value",
  pivot_table_name = "Year",
  pivot_table_rows_order_values = sort(
    unique(data_for_section$time_period), decreasing=TRUE),
  pivot_table_columns_order_values = highest_qualification_order,
  pivot_table_column_names_suffix = " (£)"
)


csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)



####################
# SECTION: By sex

section_chart_type = "sex"
section_csv_name = "sex"


data_for_section = get_data_for_chart_type(data, section_chart_type)

#################
# CHART FORMAT

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "secondary_split_value",
  values_1 = men_women_order,
  column_2 = "primary_split_value",
  values_2 = highest_qualification_order
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "chart")
save_data_frame(data_for_section, csv_filename)

#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "secondary_split_value",
  pivot_rows_column_name = "primary_split_value",
  pivot_cells_column_name = "value",
  pivot_table_name = "Highest qualification",
  pivot_table_rows_order_values = rev(highest_qualification_order),
  pivot_table_columns_order_values = men_women_order,
  pivot_table_column_names_suffix = " (£)"
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)


##########################
# SECTION: By ethnicity

section_chart_type = "ethnicity"
section_csv_name = "ethnicity"


data_for_section = get_data_for_chart_type(data, section_chart_type)

#################
# CHART FORMAT

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "primary_split_value",
  values_1 = degree_no_degree_order,
  column_2 = "secondary_split_value",
  values_2 = ethnicity_order
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "chart")
save_data_frame(data_for_section, csv_filename)

#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "primary_split_value",
  pivot_rows_column_name = "secondary_split_value",
  pivot_cells_column_name = "value",
  pivot_table_name = "Ethnicity",
  pivot_table_rows_order_values = ethnicity_order,
  pivot_table_columns_order_values = degree_no_degree_order,
  pivot_table_column_names_suffix = " (£)"
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)



###########################
# SECTION: By disability

section_chart_type = "disability"
section_csv_name = "disability"


data_for_section = get_data_for_chart_type(data, section_chart_type)

#################
# CHART FORMAT

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "secondary_split_value",
  values_1 = disability_status_no_yes_order,
  column_2 = "primary_split_value",
  values_2 = rev(highest_qualification_order),
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "chart")
save_data_frame(data_for_section, csv_filename)

#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "secondary_split_value",
  pivot_rows_column_name = "primary_split_value",
  pivot_cells_column_name = "value",
  pivot_table_name = "Highest qualification",
  pivot_table_rows_order_values = rev(highest_qualification_order),
  pivot_table_columns_order_values = rev(disability_status_no_yes_order)
) %>% rename("Disabled (£)" = "Yes", "Not disabled (£)" = "No")

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)

