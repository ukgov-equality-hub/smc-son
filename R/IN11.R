
#################################################
# INPUTS FOR THIS SCRIPT - CHANGE THIS SECTION

input_folder = "input/SON25/"

input_file = "2025-01-01-in11-full-dataset.csv"

output_folder_prefix = "../son/content"
domain = "intermediate_outcomes"
subdomain = "compulsory_school_age_(5_to_16_years)"
indicator_name = "level_of_development_at_age_5"
version = "3.0"

indicator_code = "IN11"


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
# SECTION: By year

section_chart_type = "trend"
section_csv_name = "FSM-and-year"

data_for_section = get_data_for_chart_type(data, section_chart_type)

#################
# CHART FORMAT

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "primary_split_value",
  values_1 = fsm_order_w_total,
  column_2 = "secondary_split_value",
  values_2 = NULL
) %>% 
  mutate(
    secondary_split_value = as.numeric(secondary_split_value),
    time_period = paste(secondary_split_value - 1, secondary_split_value - 2000, sep="/"),
  )

csv_filename = generate_csv_file_name(split = section_csv_name, format = "chart")
save_data_frame(data_for_section, csv_filename)

#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "primary_split_value",
  pivot_rows_column_name = "time_period",
  pivot_cells_column_name = "value",
  pivot_table_name = "School year",
  pivot_table_rows_order_values = sort(
    unique(data_for_section$time_period), decreasing=TRUE),
  pivot_table_columns_order_values = fsm_order_w_total,
  pivot_table_column_names_suffix = " (%)"
) %>% rename(
  c("FSM-eligible pupils (%)" = "Eligible for free school meals (%)",
    "Non-eligible pupils (%)" = "Not eligible for free school meals (%)",
    "All pupils (%)" = "Total (%)")
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)


##########################################
# SECTION: By area

section_chart_type = "geography_map"
section_csv_name = "ITL2-region-and-FSM"

data_for_section = get_data_for_chart_type(data, section_chart_type)

#################
# CHART FORMAT

for (eligibility  in c("FSM eligible","Not FSM eligible")) {
  
  data_for_section_filtered = data_frame__filter(
    data_frame = data_for_section,
    column_name = "primary_split_value",
    values = c(eligibility)
  )
  
  data_for_section_filtered = data_frame__sort_rows_with_specific_values(
    data_frame = data_for_section_filtered,
    column_1 = "secondary_split_value",
    values_1 = NULL
  )
  
  snake_eligibility = str_replace_all(eligibility," ", "-")
                                      
  csv_filename = generate_csv_file_name(split = paste0(section_csv_name, "--", snake_eligibility), format = "chart")
  save_data_frame(data_for_section_filtered, csv_filename)

}


#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "primary_split_value",
  pivot_rows_column_name = "area_name",
  pivot_cells_column_name = "value",
  pivot_table_name = "Region",
  pivot_table_columns_order_values = c("FSM eligible", "Not FSM eligible"),
  pivot_table_column_names_suffix = " (%)"
) 

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)



####################
# SECTION: By sex

section_chart_type = "sex"
section_csv_name = "FSM-and-sex"


data_for_section = get_data_for_chart_type(data, section_chart_type)

#################
# CHART FORMAT

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "secondary_split_value",
  values_1 = fsm_order,
  column_2 = "primary_split_value",
  values_2 = boys_girls_order,
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
  pivot_table_name = "Sex",
  pivot_table_rows_order_values = boys_girls_order,
  pivot_table_columns_order_values = fsm_order,
  pivot_table_column_names_suffix = " (%)"
) %>% rename(
  c("FSM-eligible pupils (%)" = "Eligible for free school meals (%)",
    "Non-eligible pupils (%)" = "Not eligible for free school meals (%)")
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)




##########################
# SECTION: By ethnicity and sex

section_chart_type = "ethnicity_sex"
section_csv_name = "FSM-and-ethnicity"

data_for_section = get_data_for_chart_type(data, section_chart_type) %>% 
  mutate(seb = "Eligible for free school meals")

#################
# CHART FORMAT

# overall eligible for FSM

data_for_section_filtered = data_frame__filter(
  data_frame = data_for_section,
  column_name = "primary_split_type",
  values = c("ethnicity")
) %>% rename(
  c("ethnicity" = "primary_split_value")
)

csv_filename = generate_csv_file_name(split = paste0(section_csv_name, "--total"), format = "chart")
save_data_frame(data_for_section_filtered, csv_filename)

all_ethnicity_sex_table = data_for_section_filtered %>%
  mutate(primary_split_value = "Total") %>% 
  select(ethnicity, primary_split_value, value)

# boys and girls
for (sex  in c("Boys","Girls")) {
  
  data_for_section_filtered = data_frame__filter(
    data_frame = data_for_section,
    column_name = "primary_split_value",
    values = c(sex)
  ) %>% rename(
    c("ethnicity" = "secondary_split_value")
  )

  csv_filename = generate_csv_file_name(split = paste0(section_csv_name, "--", str_to_lower(sex)), format = "chart")
  save_data_frame(data_for_section_filtered, csv_filename)
  
  all_ethnicity_sex_table = rbind(
    all_ethnicity_sex_table, 
    data_for_section_filtered %>% 
      select(ethnicity, primary_split_value, value))
}

#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = all_ethnicity_sex_table,
  pivot_columns_column_name = "primary_split_value",
  pivot_rows_column_name = "ethnicity",
  pivot_cells_column_name = "value",
  pivot_table_name = "Ethnicity",
  pivot_table_rows_order_values = top_level_ethnicity_order,
  pivot_table_columns_order_values = boys_girls_order_w_total,
  pivot_table_column_names_suffix = " (%)"
)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)




##########################
# SECTION: By neighbourhood deprivation

section_chart_type = "level_idaci"
section_csv_name = "IDACI-decile"

data_for_section = get_data_for_chart_type(data, section_chart_type) %>% 
  mutate(primary_split_value = as.numeric(primary_split_value))

#################
# CHART FORMAT

data_for_section = data_frame__sort_rows_with_specific_values(
  data_frame = data_for_section,
  column_1 = "primary_split_value",
  values_1 = NULL)

csv_filename = generate_csv_file_name(split = section_csv_name, format = "chart")
save_data_frame(data_for_section, csv_filename)

#################
# TABLE FORMAT

pivot_table = pivot_table__create(
  pivot_table_source = data_for_section,
  pivot_columns_column_name = "unit",
  pivot_rows_column_name = "primary_split_value",
  pivot_cells_column_name = "value",
  pivot_table_name = "IDACI decile",
  pivot_table_rows_order_values = sort(
    unique(data_for_section$primary_split_value), decreasing=FALSE),
  pivot_table_column_names_suffix = " (%)"
) 

csv_filename = generate_csv_file_name(split = section_csv_name, format = "table")
save_data_frame(pivot_table, csv_filename)

