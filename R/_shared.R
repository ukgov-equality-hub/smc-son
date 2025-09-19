
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

men_women_order_w_total = c(
  men_women_order,
  "Total"
)

boys_girls_order = c(
  "Boys",
  "Girls"
)

boys_girls_order_w_total = c(
  boys_girls_order,
  "Total"
)

disability_status_no_yes_order = c(
  "No",
  "Yes"
)

fsm_order = c(
  "Eligible for free school meals",
  "Not eligible for free school meals"
)

fsm_order_w_total = c(
  fsm_order,
  "Total"
)

top_level_ethnicity_order = c(
  "Asian",
  "Black",
  "Mixed",
  "White",
  "Other"
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

ethnicity_order_longer = c(
  "Bangladeshi",
  "Chinese",
  "Indian",
  "Pakistani",
  "Any other Asian background",
  "Black African",
  "Caribbean",
  "Any other Black background",
  "White and Asian",
  "White and Black African",
  "White and Black Caribbean",
  "Any other Mixed background",
  "White British",
  "White Irish",
  "Gypsy/Roma",
  "Traveller of Irish heritage",
  "Any other White background",
  "Any other ethnic group"
)


highest_qualification_order = c(
  "Lower level (below GCSE grade 1)",
  "O level, GCSE and equivalent",
  "A level and equivalent",
  "Further education below degree",
  "First degree",
  "Higher degree"
)

degree_no_degree_order = c("Degree", "No degree")

parental_qualification_order = c(
  "Lower level (below GCSE grade 1)",
  "O level, GCSE and equivalent",
  "A level and equivalent",
  "Further education below degree",
  "Degree level or above"
)
  

disadvantage_order = c(
  "Disadvantaged",
  "Not known to be disadvantaged"
)

disadvantage_order_w_total = c(
  disadvantage_order,
  "Total"
)

nations_order = c(
  "England",
  "Scotland",
  "Wales",
  "Northern Ireland",
  "United Kingdom"
)

timestamp = format(Sys.time(), "%Y%m%d-%H%M%S")



#####################
# SHARED FUNCTIONS

generate_csv_file_name = function(split = NULL, format = NULL) {
  if (!is.null(split) && !is.null(format)) {
    output_file_name = paste0(
      indicator_code, "-",
      version, "-",
      gsub(",","",gsub("_", "-", indicator_name)), "--",
      "by-", split, "--",
      format, "-format",
      ".csv"
    )
  }
  else {
    output_file_name = paste0(
      indicator_code, "-",
      version, "-",
      gsub(",","",gsub("_", "-", indicator_name)), "--",
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
  if (nchar(output_file_absolute_path) > 260 & Sys.info()["sysname"] != "Darwin") {
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
