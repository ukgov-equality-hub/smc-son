
source("_data_frame_utils.R")
source("_pivot_table.R")

if (!require(R.utils)) {
  install.packages("R.utils")
}

# Install and load the reshape2 package if not already installed
if (!require(reshape2)) {
  install.packages("reshape2")
  library(reshape2)
}

if (!require(tidyverse)) {
  install.packages("tidyverse")
  library(tidyverse)
}


################
# STATIC DATA


occupational_class_order = c(
  "Lower working",
  "Higher working",
  "Intermediate",
  "Lower professional",
  "Higher professional"
)

occupational_class_order_w_total =
  c(occupational_class_order, c("Total"))

rev_occupational_class_order = rev(occupational_class_order)

rev_occupational_class_order_w_total =
  c(rev_occupational_class_order, c("Total"))

occupational_class_order_two_vals = c(
  "Lower working", "Higher professional"
)

neet_values_order = c(
  "Education and training",
  "Employment",
  "NEET"
)

men_women_order = c(
  "Men",
  "Women"
)

disability_status_no_yes_order = c(
  "No",
  "Yes"
)

highest_qualification_order = c(
  "Lower level (below GCSE grade 1)",
  "O level, GCSE and equivalent",
  "A level and equivalent",
  "Further education below degree",
  "First degree",
  "Higher degree"
)

ethnicity_order = c(
  "Bangladeshi",
  "Chinese",
  "Indian",
  "Pakistani",
  "Black African",
  "Black Caribbean",
  "Mixed",
  "White British",
  "White other",
  "Other"
)

timestamp = format(Sys.time(), "%Y%m%d-%H%M%S")



#####################
# SHARED FUNCTIONS

generate_csv_file_name = function(split = NULL, format = NULL) {
  if (!is.null(split) && !is.null(format)) {
    output_file_name = paste0(
      indicator_code, "-",
      version, "-",
      gsub("_", "-", indicator_name), "--",
      "by-", split, "--",
      format, "-format",
      ".csv"
    )
  }
  else {
    output_file_name = paste0(
      indicator_code, "-",
      version, "-",
      gsub("_", "-", indicator_name), "--",
      "full-dataset",
      ".csv"
    )
  }
  
  return(output_file_name)
}

save_data_frame = function(data_frame, filename) {
  dir.create(output_folder, recursive = TRUE, showWarnings = FALSE)
  
  output_file_path = paste0(
    output_folder,
    filename
  )
  
  output_file_absolute_path = R.utils::getAbsolutePath(output_file_path)
  if (nchar(output_file_absolute_path) > 260) {
    # Get a timestamp
    temp_output_folder = paste0(
      "output", "/",
      indicator_code, "-",
      timestamp, "/"
    )
    dir.create(temp_output_folder, recursive = TRUE, showWarnings = FALSE)
    
    warning(paste0("The file path is too long. Saving to ", R.utils::getAbsolutePath(temp_output_folder) ," instead"))
    output_file_path = paste0(
      temp_output_folder,
      filename
    )
  }
  
  write.csv(
    data_frame,
    file = output_file_path,
    row.names = FALSE,
    na = ""
  )
}

get_data_for_chart_type = function(data_frame, chart_type) {
  filtered_data_frame = data_frame__filter(
    data_frame = data_frame,
    column_name = "chart_type",
    values = chart_type
  )
  
  return(filtered_data_frame)
}




#####################
# SHARED VARIABLES

output_folder = paste0(
  output_folder_prefix, "/",
  domain, "/",
  subdomain, "/",
  indicator_name, "/",
  version, "/"
)
