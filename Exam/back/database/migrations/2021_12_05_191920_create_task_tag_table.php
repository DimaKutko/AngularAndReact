<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaskTagTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('task_tag', function (Blueprint $table) {
            $table->bigInteger('task_id')->unsigned();
            $table->bigInteger('tag_id')->unsigned();
            $table->primary(['task_id', 'tag_id']);
        });

        Schema::table('task_tag', function (Blueprint $table) {
            $table
                ->foreign('task_id')
                ->on('tasks')
                ->references('id')
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });

        Schema::table('task_tag', function (Blueprint $table) {
            $table
                ->foreign('tag_id')
                ->on('tags')
                ->references('id')
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('task_tag');
    }
}
