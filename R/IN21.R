
#################################################
# INPUTS FOR THIS SCRIPT - CHANGE THIS SECTION

input_folder = "input/SON25/"

input_file = "2025-01-01-in21-full-dataset.csv"

output_folder_prefix = "../son/content"
domain = "intermediate_outcomes"
subdomain = "routes_into_work_(16_to_29_years)"
indicator_name = "destinations_following_the_end_of_compulsory_full-time_education"
version = "2.0"

indicator_code = "IN21"



############
# IMPORTS

source("_shared.R")



###############
# THE SCRIPT

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
# SECTION: By socio-economic background

section_chart_type = "seb"
section_csv_name = "SEB"


data_for_section = get_data_for_chart_type(data, section_chart_type)

#################
# CHART FORMAT

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "primary_split_value",
  values_1 = rev(neet_values_order),
  column_2 = "secondary_split_value",
  values_2 = occupational_class_order
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
  pivot_table_name = "Socio-economic background",
  pivot_table_rows_order_values = rev(occupational_class_order),
  pivot_table_columns_order_values = neet_values_order,
  pivot_table_column_names_suffix = " (%)"
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)



####################
# SECTION: By sex

section_chart_type = "sex"
section_csv_name = "SEB-and-sex"


data_for_section = get_data_for_chart_type(data, section_chart_type)

#################
# CHART FORMAT

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "primary_split_value",
  values_1 = rev(neet_values_order),
  column_2 = "secondary_split_value",
  values_2 = occupational_class_order,
  column_3 = "tertiary_split_value",
  values_3 = men_women_order
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "chart")
save_data_frame(data_for_section, csv_filename)

#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "primary_split_value",
  pivot_rows_column_name = "secondary_split_value",
  pivot_rows_column_2_name = "tertiary_split_value",
  pivot_cells_column_name = "value",
  pivot_table_name = "Socio-economic background",
  pivot_table_name_column_2 = "Sex",
  pivot_table_rows_order_values = rev(occupational_class_order),
  pivot_table_columns_order_values = neet_values_order,
  pivot_table_column_names_suffix = " (%)"
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)



##########################
# SECTION: By ethnicity

section_chart_type = "ethnicity"
section_csv_name = "SEB-and-ethnicity"


data_for_section = get_data_for_chart_type(data, section_chart_type)

#################
# CHART FORMAT

# Higher professional
split_value = "Higher professional"
split_name = "higher-professional"

data_for_section__higher_professional = data_frame__filter(
  data_frame = data_for_section,
  column_name = "secondary_split_value",
  values = c(split_value)
)

data_for_section__higher_professional = data_frame__sort_rows_by_values(
  data_frame = data_for_section__higher_professional,
  column_name = "tertiary_split_value"
)

csv_filename = generate_csv_file_name(split = paste0(section_csv_name, "--", split_name), format = "chart")
save_data_frame(data_for_section__higher_professional, csv_filename)

# Lower working
split_value = "Lower working"
split_name = "lower-working"

data_for_section__higher_professional = data_frame__filter(
  data_frame = data_for_section,
  column_name = "secondary_split_value",
  values = c(split_value)
)

data_for_section__higher_professional = data_frame__sort_rows_by_values(
  data_frame = data_for_section__higher_professional,
  column_name = "tertiary_split_value"
)

csv_filename = generate_csv_file_name(split = paste0(section_csv_name, "--", split_name), format = "chart")
save_data_frame(data_for_section__higher_professional, csv_filename)

#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "secondary_split_value",
  pivot_rows_column_name = "tertiary_split_value",
  pivot_cells_column_name = "value",
  pivot_table_name = "Ethnicity",
  pivot_table_columns_order_values = c("Lower working", "Higher professional"),
  pivot_table_column_names_suffix = " (%)"
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)



###########################
# SECTION: By disability

section_chart_type = "disability"
section_csv_name = "SEB-and-disability"


data_for_section = get_data_for_chart_type(data, section_chart_type)

#################
# CHART FORMAT

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "primary_split_value",
  values_1 = rev(neet_values_order),
  column_2 = "secondary_split_value",
  values_2 = occupational_class_order,
  column_3 = "tertiary_split_value",
  values_3 = disability_status_no_yes_order
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "chart")
save_data_frame(data_for_section, csv_filename)

#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "primary_split_value",
  pivot_rows_column_name = "secondary_split_value",
  pivot_rows_column_2_name = "tertiary_split_value",
  pivot_cells_column_name = "value",
  pivot_table_name = "Socio-economic background",
  pivot_table_name_column_2 = "Disabled",
  pivot_table_rows_order_values = rev(occupational_class_order),
  pivot_table_rows_2_order_values = rev(disability_status_no_yes_order),
  pivot_table_columns_order_values = neet_values_order,
  pivot_table_column_names_suffix = " (%)"
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)

