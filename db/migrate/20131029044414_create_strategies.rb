class CreateStrategies < ActiveRecord::Migration
  tag :predeploy
  
  def self.up
    create_table :strategies do |t|
      t.string :title
      t.text :description
      t.integer :course_id, :limit => 8
      t.belongs_to :user, :limit => 8      
    end
  end

  def self.down
    drop_table :strategies
  end
end
