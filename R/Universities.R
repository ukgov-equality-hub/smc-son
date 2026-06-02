
#################################################
# INPUTS FOR THIS SCRIPT - CHANGE THIS SECTION

input_folder = "input/Universities/2026/"

input_file = "university_rankings_data.csv"

output_folder = "../son/content/universities/"


############
# IMPORTS

source("_shared_universities.R")


###############
# THE SCRIPT

## Clear output folder
unlink(output_folder, recursive=TRUE)

input_file_path = paste0(input_folder, input_file)

# Open the input file
data = read.csv(input_file_path)

# Rename some columns
data = data_frame__rename_column(
  data_frame = data,
  old_column_name = 'ProviderName',
  new_column_name = 'university_name'
)


# Sort universities alphabetically by the bit of the name that's important
data$university_name_for_sorting <- data$university_name

data$university_name_for_sorting <- gsub("^The ", "", data$university_name_for_sorting)
data$university_name_for_sorting <- gsub("^University of ", "", data$university_name_for_sorting)
data$university_name_for_sorting <- gsub("^University for the ", "", data$university_name_for_sorting)
data$university_name_for_sorting <- gsub("^the ", "", data$university_name_for_sorting)

data <- data[order(data$university_name_for_sorting), ]
data$university_name_for_sorting <- NULL


# Add university_slug
data$university_slug <- data$university_name %>%
  str_to_lower() %>%
  str_remove_all("[[:punct:]]") %>%
  str_replace_all("\\s+", "-")


################################
# CREATE JSON FILE FOR SEARCH

data_for_json <- data[, c("university_name", "university_slug")]

json_obj <- list(
  universities = data_for_json
)

save_json_file(json_obj, "universities.json", pretty_print = TRUE, output_folder_override = "../son/static/data/by-page/universities/")

